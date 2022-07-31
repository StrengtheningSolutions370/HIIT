using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;

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
        public async Task<IActionResult> PostLesson(Lesson lesson)
        {

            //assign the employee to the lesson:
            lesson.Employee = await _employeeRepo._GetEmployeeIdAsync(lesson.EmployeeID);

            _lessonRepo.Add(lesson);
            await _lessonRepo.SaveChangesAsync();

            int newLessonID = lesson.LessonID;

            //looping over the exercises to add:
            foreach (Exercise l in lesson.exercises)
            {
                LessonPlan temp = new LessonPlan();
                temp.Exercise = await _exerciseRepo._GetExerciseIdAsync(l.ExerciseID);
                temp.Lesson = await _lessonRepo.GetLessonIdAsync(newLessonID);
                _lessonPlanRepo.Add(temp);
                lesson.LessonPlan.Add(temp);
            }
            await _lessonRepo.SaveChangesAsync();

            _lessonRepo.Update(lesson);
            await _lessonRepo.SaveChangesAsync();

            return Ok();
        }

        //UPDATE
        [HttpPut]
        [Route("")]
        public async Task<IActionResult> PutLesson(int id, [FromBody] Lesson lesson)
        {

            //assign the employee to the lesson:
            lesson.Employee = await _employeeRepo._GetEmployeeIdAsync(lesson.EmployeeID);

            lesson.LessonPlan.Clear(); //removes all old exercises

            //looping over the exercises to add:
            foreach (Exercise l in lesson.exercises)
            {
                LessonPlan temp = new LessonPlan();
                temp.Exercise = await _exerciseRepo._GetExerciseIdAsync(l.ExerciseID);
                temp.Lesson = await _lessonRepo.GetLessonIdAsync(lesson.LessonID);
                _lessonPlanRepo.Add(temp);
                lesson.LessonPlan.Add(temp);
            }
            await _lessonRepo.SaveChangesAsync();

            _lessonRepo.Update(lesson);
            await _lessonRepo.SaveChangesAsync();

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
                var lessons = await _lessonPlanRepo.GetAllLessonPlansAsync();
                return Ok(lessons);
            } catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

    }
}
