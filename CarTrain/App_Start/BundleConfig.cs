using System.Web;
using System.Web.Optimization;

namespace Caravan
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.UseCdn = true;   //enable CDN support

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-animate.js",
                        "~/Scripts/angular-resource.js",
                        "~/Scripts/angular-touch.js",
                        "~/Scripts/angular-adaptive-speech.js",
                        "~/Scripts/maps.googleapis.js",
                        "~/Scripts/lodash.js",
                        "~/Scripts/canvas-gauge.js",
                        "~/Scripts/angular-google-maps.min.js",
                        "~/Scripts/angular-ui/ui-bootstrap-tpls.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                //"~/Scripts/bootstrap.js",
                    "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/caravan").Include(
                //"~/Scripts/bootstrap.js",
                      "~/js/app.js",
                      "~/js/caravan.utility.js",
                      "~/js/friends.utility.js",
                      "~/js/gauges.directive.js",
                      "~/js/constants.js",
                      "~/js/display.controller.js",
                      "~/js/voice.controller.js",
                      "~/js/buttons.controller.js",
                      "~/js/ericsson/emulate.service.js",
                      "~/js/ericsson/ericsson.utility.js",
                      "~/js/ericsson/status.service.js",
                      "~/js/ericsson/diagnostics.service.js",
                      "~/js/m2x/m2x.utility.js",
                      "~/js/m2x/status.service.js",
                      "~/js/google/directions.utility.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}