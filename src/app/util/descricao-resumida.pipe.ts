import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'descricaoReduzida'})

export class DescricaoReduzida implements PipeTransform {
    transform(texto: string, textParam: number) {
        if (texto.length > 15) {
            return texto.substr(0, textParam) + '...';
        }
        return texto;
    }
}
