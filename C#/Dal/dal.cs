using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class dal
    {
        public static int Register(Users register)
        {
            using (Baby_BEntities1 db = new Baby_BEntities1())
            {
                try
                {

                    db.Users.Add(register);
                    db.SaveChanges();
                    int id= db.Users.Where(c=>c.EMail==register.EMail&&c.UserPassword==register.UserPassword).Select(c=>c.IdUser).FirstOrDefault();
                    return id;
                }
                catch(Exception e)
                {
                    //throw new Exception();
                    return 0;
                }
            }
        }

        //public static bool Register(User user)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
