using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;
using Team7.ViewModels;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonController : Controller
    {

        private readonly IEmployeeRepo _employeeRepo;
        private readonly ILessonPlanRepo _lessonPlanRepo;
        private readonly ILessonRepo _lessonRepo;
        private readonly IScheduleRepo _scheduleRepo;
        private readonly IExerciseRepo _exerciseRepo;
        private readonly RoleManager<IdentityRole> _roleManager;

        public LessonController(IExerciseRepo exerciseRepo, IEmployeeRepo employeeRepo, ILessonPlanRepo lessonPlanRepo, IScheduleRepo scheduleRepo, RoleManager<IdentityRole> roleManager, ILessonRepo lessonRepo)
        {
            _employeeRepo = employeeRepo;
            _lessonPlanRepo = lessonPlanRepo;
            _scheduleRepo = scheduleRepo;
            _roleManager = roleManager;
            _lessonRepo = lessonRepo;
            _exerciseRepo = exerciseRepo;
        }


        //CREATE
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostLesson(LessonViewModel lvm)
        {
            var lessonVM = lvm.Lesson;
            var exerciseVM = lvm.Exercises;

            //check for duplicate:
            var duplicate = await _lessonRepo.GetLessonByNameAsync(lessonVM.Name);
            if (duplicate != null)
            {
                return StatusCode(StatusCodes.Status409Conflict, "Lesson with the same name already exists");
            }

            Lesson lesson = new Lesson();
            lesson.Name = lessonVM.Name;
            //lesson.Employee = await _employeeRepo._GetEmployeeIdAsync(lessonVM.EmployeeID);
            lesson.EmployeeID = lessonVM.EmployeeID;
            _lessonRepo.Add(lesson);
            await _lessonRepo.SaveChangesAsync();

            //fetch employee:
            var emp = await _employeeRepo._GetEmployeeIdAsync(lesson.EmployeeID);
            if (emp != null)
            {
                emp.Lesson.Add(lesson);
                _employeeRepo.Update(emp);
                await _employeeRepo.SaveChangesAsync();
            }

            var NewLessonID = lesson.LessonID; //this is for debug
            foreach (int exerciseVMID in exerciseVM)
            {
                LessonPlan lp = new LessonPlan();
                lp.Exercise = await _exerciseRepo._GetExerciseIdAsync(exerciseVMID);
                lp.Lesson = lesson;
                lp.LessonID = lesson.LessonID;
                _lessonPlanRepo.Add(lp);
                lesson.LessonPlan.Add(lp);
            }
            await _lessonRepo.SaveChangesAsync();
            await _lessonPlanRepo.SaveChangesAsync();
            return Ok();
        }

        //UPDATE
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutLesson(int id, [FromBody] LessonViewModel lvm)
        {

            var update = await _lessonRepo.GetLessonIdAsync(id);

            var lesson = lvm.Lesson;
            var exercises = lvm.Exercises;


            update.Name = lesson.Name;
            update.EmployeeID = lesson.EmployeeID;

            await _lessonPlanRepo.RemoveRangeLessonIdAsync(id);

            foreach (int exercise in exercises)
            {
                LessonPlan lp = new LessonPlan();
                lp.Exercise = await _exerciseRepo._GetExerciseIdAsync(exercise);
                lp.Lesson = update;
                lp.LessonID = update.LessonID;
                _lessonPlanRepo.Add(lp);
                update.LessonPlan.Add(lp);
            }
            _lessonRepo.Update(update);
            await _lessonRepo.SaveChangesAsync();
            await _lessonPlanRepo.SaveChangesAsync();
            return Ok();
        }


        //DELETE
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteLesson(int id)
        {
            var lesson = await _lessonRepo.GetLessonIdAsync(id);

            if (lesson == null)
                return NotFound("Lesson not found for deletion");

            bool assFlag = false;

            //check if attatched to employee:
            //if (lesson.Schedule.Count != 0)
            //    assFlag = true;

            //if (assFlag)
            //    return StatusCode(StatusCodes.Status409Conflict, new { message = "Lesson has assosciations to another table.", lesson });

            //perform delete:
            //await _lessonPlanRepo.RemoveRangeLessonIdAsync(id);
            _lessonRepo.Delete(lesson);
            await _lessonRepo.SaveChangesAsync();

            return Ok();
        }

        //GET ALL
        [HttpGet]
        [Route("getAll")]
        public async Task<IActionResult> GetLessons()
        {
            try
            {
                var lessons = await _lessonRepo.GetAllLessonsAsync();
                Exercise[] exe = await _exerciseRepo._GetAllExercisesAsync();

                //create lessonPlanId array:
                if (lessons != null)
                    foreach (var lesson in lessons)
                    {
                        var i = new List<int>();
                        foreach (var l in lesson.LessonPlan)
                        {
                            i.Add(l.LessonPlanID);
                        }
                        lesson.exercises = getExe(exe, i);
                    }

                return Ok(lessons); //will return a 204 if null

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        static Exercise[] getExe(Exercise[] exe, List<int> i)
        {
            var output = new List<Exercise>();
            foreach (var l in i)
            {
                foreach (var e in exe)
                {
                    foreach (var q in e.LessonPlan)
                    {
                        if (q.LessonPlanID == l)
                            output.Add(e);
                    }
                }
            }
            return output.ToArray();
        }

    }
}
