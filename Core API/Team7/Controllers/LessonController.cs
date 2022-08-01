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
            /*Lesson rec = new Lesson();

            var lesson = lvm.Lesson;
            var exercises = lvm.Exercises;

            rec.Employee = await _employeeRepo._GetEmployeeIdAsync(lesson.EmployeeID);
            rec.Name = lesson.Name;

            _lessonRepo.Add(rec);
            await _lessonRepo.SaveChangesAsync();

            var lessonID = rec.LessonID;

            //looping over the exercises to add:


            foreach (int l in exercises)
            {
                LessonPlan temp = new LessonPlan();
                temp.Exercise = await _exerciseRepo._GetExerciseIdAsync(l);
                temp.Lesson = lesson;
                temp.LessonID = lessonID;
                _lessonPlanRepo.Add(temp);
                rec.LessonPlan.Add(temp);
            }

            _lessonRepo.Update(rec);
            await _lessonRepo.SaveChangesAsync();

            return Ok();*/



            //get the lesson and exercise array from the LessonViewModel
            var lessonVM = lvm.Lesson;
            var exerciseVM = lvm.Exercises;

            Lesson lesson = new Lesson();

            lesson.Name = lessonVM.Name;
            //get the employee to add to the lesson:
            var employee = await _employeeRepo._GetEmployeeIdAsync(lessonVM.EmployeeID);
            //add employee to the lesson:
            //lesson.Employee = employee;
            //set employee ID
            lesson.EmployeeID = lessonVM.EmployeeID;

            //save the lesson to the db so that it gets an id:
            _lessonRepo.Add(lesson);
            await _lessonRepo.SaveChangesAsync();

            //this is the id of the object just created
            var NewLessonID = lesson.LessonID; //this is for debug

            //get all exercises
            Exercise[] exe = await _exerciseRepo._GetAllExercisesAsync();

            //loop through the exerciseVM and add the exercises:
            foreach (int exerciseVMID in exerciseVM)
            {
                //make a LessonPlan for the association:
                LessonPlan lp = new LessonPlan();
                lp.Exercise = await _exerciseRepo._GetExerciseIdAsync(exerciseVMID);
                lp.Lesson = lesson;
                lp.LessonID = lesson.LessonID;
                //add to the LessonPlan:
                _lessonPlanRepo.Add(lp);
                //add to the lesson:
                lesson.LessonPlan.Add(lp);
            }

            //save changes to the LessonPlanRepo & Lesson:
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

            //assign the employee to the lesson:
            update.Employee = await _employeeRepo._GetEmployeeIdAsync(lesson.EmployeeID);

            //delete all old exercises from the lessonPlan table:
            var plans = await _lessonPlanRepo.GetLessonsPlanByLessonIDAsync(id);

            /*if (plans != null)
                foreach (var plan in plans)
                {
                    _lessonPlanRepo.Delete(plan);
                }*/

            //looping over the exercises to add:
            update.LessonPlan.Clear();

            foreach (int exercise in exercises)
            {
                LessonPlan lp = new LessonPlan();
                lp.Exercise = await _exerciseRepo._GetExerciseIdAsync(exercise);
                lp.Lesson = update;
                lp.LessonID = update.LessonID;
                _lessonPlanRepo.Add(lp);
                update.LessonPlan.Add(lp);
            }

            await _lessonRepo.SaveChangesAsync();
            _lessonRepo.Update(update);
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
            if (lesson.Employee != null)
                assFlag = true;
            if (lesson.Schedule.Count != 0)
                assFlag = true;
            if (lesson.LessonPlan.Count != 0)
                assFlag = true;

            if (assFlag)
                return StatusCode(StatusCodes.Status409Conflict, new { message = "Lesson has assosciations to another table.", lesson });

            //perform delete:
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

            } catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        static Exercise[] getExe(Exercise[] exe, List<int> i)
        {
            var output = new List<Exercise>();
            foreach (var l in i)
            {
                foreach(var e in exe)
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
