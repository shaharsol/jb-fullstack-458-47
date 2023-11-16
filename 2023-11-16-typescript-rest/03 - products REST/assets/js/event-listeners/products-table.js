var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import rest from "../api/rest.js";
export default function productsListener(e) {
    return __awaiter(this, void 0, void 0, function* () {
        const target = e.target;
        if (target.id.startsWith('delete-')) { // delete-3
            const productId = target.id.substring('delete-'.length);
            // REST request to delete from server
            const response = yield rest('DELETE', `https://dummyjson.com/products/${productId}`);
            // delete the TR from the table
            document.getElementById(`tr-${productId}`).remove();
        }
    });
}
