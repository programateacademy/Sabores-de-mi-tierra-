import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'recipe', loadChildren: () => import('./modules/recipe/recipe.module').then(m => m.RecipeModule) },
  { path: 'new-recipe', loadChildren: () => import('./modules/new-recipe/new-recipe.module').then(m => m.NewRecipeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
