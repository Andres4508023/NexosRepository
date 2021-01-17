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
    public class DoctorsController : ControllerBase
    {
        private readonly Context _context;

        public DoctorsController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doctor>>>GetDoctors()
        {
            return await _context.Doctor.ToListAsync();
        }     

        [HttpPost]
        public async Task<ActionResult<Doctor>>PostDoctors(Doctor doctor)
        {
            _context.Doctor.Add(doctor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDoctors", new { id = doctor.IdDoctor }, doctor);
        }

        [HttpGet("{IdDoctor}")]
        public async Task<ActionResult<Pacientes>>GetPacienteDoctor(int IdDoctor)
        {
            var DocPac = await _context.Pacientes.FindAsync(IdDoctor);

            if (DocPac == null)
            {
                return NotFound();
            }
            return DocPac;
        }
    }
}