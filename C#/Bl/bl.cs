using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl
{
    public class bl
    {

        public static int Register(Users register)
        {
            //convert
            //return Dal.dal.Register(Convert.ConvertFromRegisterToUser(register));
            return Dal.dal.Register(register);

        }

    }
}
