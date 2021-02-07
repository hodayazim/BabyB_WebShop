using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl
{
   public class UsersBl

    {
        public static int GetUser(string mail, string password)
        {
            return Dal.UsersDal.GetUser(mail, password);
        }
    }
}
