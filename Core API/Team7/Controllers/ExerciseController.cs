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
    public class ExerciseController : ControllerBase
    {
        private readonly IExerciseRepo ExerciseRepo;
        readonly private IExerciseCategoryRepo _exerciseCategoryRepo;

        public ExerciseController(IExerciseRepo exerciseRepo, IExerciseCategoryRepo exerciseCategoryrepo)
        {
            this.ExerciseRepo = exerciseRepo;
            this._exerciseCategoryRepo = exerciseCategoryrepo;
        }

        // POST api/exercise/add
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> PostExercise(Exercise exercise)
        {
            try
            {
                //var cat = await _exerciseCategoryRepo._GetExerciseCategoryIdAsync(exercise.ExerciseCategory.ExerciseCategoryID);
                var catId = exercise.ExerciseCategory.ExerciseCategoryID;
                exercise.ExerciseCategory = await _exerciseCategoryRepo._GetExerciseCategoryIdAsync(catId);


                ExerciseRepo.Add(exercise);

                if (await ExerciseRepo.SaveChangesAsync())
                    return Ok();

                return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to add value in the database. Contact support.");

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }

        // PUT api/exercise/update/5
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> PutExercise(int id, [FromBody] Exercise exercise)
        {
            var toUpdate = await ExerciseRepo._GetExerciseIdAsync(id);

            if (toUpdate == null)
            {
                return NotFound("Could not find existing Exercise with ID - " + id);
            }

            try
            {
                toUpdate.Name = exercise.Name;
                toUpdate.Focus = exercise.Focus;
                toUpdate.Url = exercise.Url;
                toUpdate.ExerciseCategory = await _exerciseCategoryRepo._GetExerciseCategoryIdAsync(exercise.ExerciseCategory.ExerciseCategoryID);

                if (await ExerciseRepo.SaveChangesAsync())
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to update value in the database. Contact support.");
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // DELETE api/exercise/delete/5
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> DeleteExercise(int id)
        {
            var tempExercise = await ExerciseRepo._GetExerciseIdAsync(id);
            if (tempExercise == null)
            {
                return NotFound();
            }
            try
            {
                ExerciseRepo.Delete(tempExercise);
                if (await ExerciseRepo.SaveChangesAsync())
                {
                    return Ok();
                }
                else
                {
                    return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to delete value in the database. Contact support.");
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/exercise/getAll
        [HttpGet]
        [Route("getAll")]
        public async Task<object> GetAllExercisesAsync()
        {
            try
            {
                var exerciseList = await ExerciseRepo.GetAllExercisesAsync();
                if (exerciseList == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(exerciseList);
                }

            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }
        }

        // GET: api/exercise/getMatch/{input}
        [HttpGet]
        [Route("getMatch")]
        public async Task<IActionResult> GetMatchingExercises(string name, string description)
        {
            try
            {
                var exercise = await ExerciseRepo.GetExercisesAsync(name, description);
                if (exercise == null)
                {
                    return Ok(0);
                }
                else
                {
                    return Ok(exercise);
                }
            }
            catch (Exception err)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, err.Message);
            }

        }
    }
}
