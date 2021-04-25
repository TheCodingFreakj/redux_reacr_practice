//Redux actions are nothing more than JavaScript objects.
//the type property drives how the state should change
//The payload property instead describes what should change, and might be omitted
//when you are fetching something, this payload takes the data
//and type property shows how the type change
//best practice in Redux we wrap every action within a function
//Such function takes the name of action creato
import { ADD_FOODITEM } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_FOODITEM, payload };
}
