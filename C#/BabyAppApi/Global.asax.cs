using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace BabyAppApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);


          

        }

        protected void Application_BeginRequest(object sender, EventArgs e)

        {


            if (Context.Request.Path.Contains("api/") && Context.Request.HttpMethod == "OPTIONS")

            {

                Context.Response.AddHeader("Access-Control-Allow-Origin", "*");

                Context.Response.AddHeader("Access-Control-Allow-Headers", "*");

                Context.Response.AddHeader("Access-Control-Allow-Methods", "*");

                Context.Response.AddHeader("Access-Control-Allow-Credentials", "true");

                Context.Response.End();

            }
            if (Context.Request.Path.Contains("api/") && Context.Request.HttpMethod == "POST")
            {
                Context.Response.AddHeader("Access-Control-Allow-Origin", "http://localhost:3000");
            }
            if (Context.Request.Path.Contains("api/") && Context.Request.HttpMethod == "GET")
            {
                Context.Response.AddHeader("Access-Control-Allow-Origin", "http://localhost:3000");
            }
            if (Context.Request.Path.Contains("api/") && Context.Request.HttpMethod == "DELETE")
            {
                Context.Response.AddHeader("Access-Control-Allow-Origin", "http://localhost:3000");
            }
            if (Context.Request.Path.Contains("api/") && Context.Request.HttpMethod == "PUT")
            {
                Context.Response.AddHeader("Access-Control-Allow-Origin", "http://localhost:3000");
            }

        }

    }
}
