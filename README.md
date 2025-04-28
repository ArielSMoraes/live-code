para rodar o projeto é necessario ter nodejs, a ultima versão estavel instalada.

```
  yarn install
  ou
  npm install
```

Logo apos isso rodar

```
  yarn dev
  ou
  npm dev
```

Sobre o projeto não consegui finalizar a solução.
Para a paginação decidi um contextapi, mas provavelmente para essa solução um zustand seria mais performatico e deixaria o codigo mais claro, além de não ser necessario o component filho conhecer da implementação (no caso ele não deve saber como é a gerencia do estado, só assim ele fica generico).

Existem alguns compartilhamentos de estado, mas quem estaria centralizando esses dados seria a pagina.
Os elementos como tabelas, filtros e paginação devem ficar genericos.

Apenas recebendo propriedades da pagina em si, tão tendo instancias diretas dentro desse components, sem side effects.
da forma que está o page pode passar as props para esses components, sem preocupações com propdrilling.


