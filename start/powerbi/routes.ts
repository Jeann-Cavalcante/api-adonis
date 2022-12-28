import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.post("/powerbi/createuser", "powerbi/UsersController.createUser");
Route.post("/powerbi/login", "powerbi/AuthController.login");

Route.group(() => {
  Route.post("/logout", "powerbi/AuthController.logout");
  Route.get("/me", "powerbi/AuthController.me");
}).prefix('powerbi').middleware('auth');


Route.group(() => {
  Route.post("/create", "CategoriesController.create");
  Route.get("/show", "CategoriesController.show");
  Route.patch("/update", "CategoriesController.update");
  Route.delete("/delete", "CategoriesController.destroy");
  Route.get("/", "CategoriesController.index");
})
  .prefix("powerbi/category")
  .middleware("auth");
