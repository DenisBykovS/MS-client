import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from "./interfaces";

@Pipe({
  name: "search",
  pure: true,
})
export class SearchPipe implements PipeTransform {
  transform(arr: Foto[], text = ""): Foto[] {
    if (text.trim() != "") {
      // возвращает только один элемент по точному совпадению
      // return arr.filter((f) => f.name.toLowerCase() == text.toLowerCase());
      return arr.filter((f) => {
        return f.name.toLowerCase().includes(text.toLowerCase());
      });
    }
    return arr;
  }
}
