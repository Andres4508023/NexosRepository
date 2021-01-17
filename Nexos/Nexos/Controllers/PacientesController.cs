using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nexos.Models;

namespace Nexos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase
    {
        private readonly Context _context;

        public PacientesController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pacientes>>> GetPacientes()
        {
            return await _context.Pacientes.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Pacientes>> PostPacientes(Pacientes pacientes)
        {
            _context.Pacientes.Add(pacientes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPacientes", new { id = pacientes.IdPaciente }, pacientes);
        }

        [HttpDelete("{IdPaciente}")]
        public async Task<ActionResult<Pacientes>> DeletePacientes(int IdPaciente)
        {
            var patientDetail = await _context.Pacientes.FindAsync(IdPaciente);
            if (patientDetail == null)
            {
                return NotFound();
            }

            _context.Pacientes.Remove(patientDetail);
            await _context.SaveChangesAsync();

            return patientDetail;
        }

        [HttpPut("{IdPaciente}")]
        public async Task<IActionResult> PutPatient(int IdPaciente, Pacientes pacientes)
        {
            if (IdPaciente != pacientes.IdPaciente)
            {
                return BadRequest();
            }
            _context.Entry(pacientes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                // _logger.LogError($"Something went wrong: {ex}");
                //await HandleExceptionAsync(httpContext, ex);
            }

            return NoContent();
        }
    }
}