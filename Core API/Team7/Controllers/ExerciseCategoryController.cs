using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Team7.Models;
using Team7.Models.Repository;

namespace Team7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciseCategoryController : ControllerBase
    {
        private readonly IExerciseCategoryRepo ExerciseCategoryRepo;
        public ExerciseCategoryController(IExerciseCategoryRepo exerciseCategoryRepo)
        {
            this.ExerciseCategoryRepo = exerciseCategoryRepo;
        }

        // POST api/ExerciseCategory/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostExerciseCategory(ExerciseCategory exerciseCategory)
        {
            try
            {
                ExerciseCategoryRepo.Add(exerciseCategory);
                await ExerciseCategoryRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        // PUT api/ExerciseCategory/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutExerciseCategory(int id, [FromBody] ExerciseCategory exerciseCategory)
        {
            var toUpdate = await ExerciseCategoryRepo._GetExerciseCategoryIdAsync(id);
            if (toUpdate == null)
            {
                return NotFound("Could not find existing Exercise Category with id:" + id);
            }
            try
            {
                toUpdate.Name = exerciseCategory.Name;
                toUpdate.Description = exerciseCategory.Description;
                await ExerciseCategoryRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // DELETE api/ExerciseCategory/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteExerciseCategory(int id)
        {
            var tempExerciseCategory = await ExerciseCategoryRepo._GetExerciseCategoryIdAsync(id);
            if (tempExerciseCategory == null)
            {
                return NotFound("Could not find existing Exercise Category with id:" + id);
            }
            try
            {
                ExerciseCategoryRepo.Delete<ExerciseCategory>(tempExerciseCategory);
                await ExerciseCategoryRepo.SaveChangesAsync();
                return Ok();
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        //GET: api/ExerciseCategory/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<object> GetExerciseCategory()
        {
            try
            {
                var exerciseCategoryList = await ExerciseCategoryRepo.GetAllExerciseCategorysAsync();
                if (exerciseCategoryList == null) return Ok(0);
                return Ok(exerciseCategoryList);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }


        // GET: api/ExerciseCategory/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingExerciseCategorys(string name, string description)
        {
            try
            {
                var exerciseCategorys = await ExerciseCategoryRepo.GetExerciseCategorysAsync(name, description);
                if (exerciseCategorys == null) return Ok(0);
                return Ok(exerciseCategorys);
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

    }
}
