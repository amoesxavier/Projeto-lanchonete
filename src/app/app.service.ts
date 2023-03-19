import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProdutoService {
  private apiUrl = "http://localhost:3000/produtos";

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }
}
export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
}
