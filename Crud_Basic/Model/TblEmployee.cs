using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;

namespace Crud_Basic.Model
{
    public class TblEmployee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [StringLength(50)]
        public String FName { get; set; }

        [StringLength(50)]
        public String LName { get; set; }
        [StringLength(250)]
        public String Mail { get; set; }
        public int Age { get; set; }
        public DateTime Dob { get; set; }
        public String Gen { get; set; }

        public int IsMarried { get; set; }
        public int IsActive { get; set; }
        public int DesignatedId { get; set; }
        [NotMapped]
        public String Designation { get; set; }


    }
}
