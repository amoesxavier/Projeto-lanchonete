import { Component, OnInit } from "@angular/core";
import { Produto } from "./app.service";
import { ProdutoService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  produtos: Produto[] = [];
  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe(
      (produtos: Produto[]) => {
        this.produtos = produtos;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
