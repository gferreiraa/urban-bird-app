import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';
export class CarrinhoService {

  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    const itemCarrinho: ItemCarrinho = new ItemCarrinho (
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );
    // Verifica a existência do item.
    let itemCarrinhoEncontrado = this.itens.find( (item: ItemCarrinho) => item.id === itemCarrinho.id);

    if ( itemCarrinhoEncontrado ) {
      itemCarrinhoEncontrado.quantidade = itemCarrinhoEncontrado.quantidade + 1;
    } else {
      this.itens.push(itemCarrinho);
    }
  }

  public totalCarrinhoCompras(): number {
    let total = 0;
    this.itens.map((item: ItemCarrinho) => {
      total = total + (item.valor * item.quantidade);
    });
    return total;
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
    console.log(itemCarrinho);
    // icrementar quantidade
    let itemCarrinhoEncotrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
      if (itemCarrinhoEncotrado) {
        itemCarrinhoEncotrado.quantidade += 1;
      }
  }

  public removerQuantidade(itemCarrinho: ItemCarrinho): void {
    let itemCarrinhoEncotrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
    if (itemCarrinhoEncotrado) {
      itemCarrinhoEncotrado.quantidade -= 1;
      if (itemCarrinhoEncotrado.quantidade === 0 ) {
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncotrado), 1);
      }
    }
  }

}
