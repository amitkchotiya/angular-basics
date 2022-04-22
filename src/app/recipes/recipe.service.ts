import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('burger', 'This is simply test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',[
            new Ingredient('Meat',1),
            new Ingredient('Fries',20),
        ]),
        new Recipe('pizza', 'This is simply test', 'https://c.pxhere.com/images/0d/18/692b96c4b089507219cf7247a57f-1621684.jpg!d',[
            new Ingredient('Buns',2),
            new Ingredient('Meat',20),
        ])
      ];  
      constructor(private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }
      onAddIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}