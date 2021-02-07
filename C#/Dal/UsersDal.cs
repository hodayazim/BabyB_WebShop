using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class UsersDal
    {
        public static int GetUser(string mail, string password)
        {
            using (Baby_BEntities1 db = new Baby_BEntities1())
            {
                Users user = db.Users.Where(u => u.EMail == mail && u.UserPassword == password).First();
                if (user == null)
                    return 0;
                return user.IdUser;
            }
        }
    }
}
