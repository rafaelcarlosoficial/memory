## Jogo da Memória

### Etapas do projeto:
1. Prototipagem
2. Desenvolvimento do HTML das 5 telas
3. CSS
4. Implementação da interatividade pelo Javascript

### Prototipagem
 Eu desenvolvi o projeto usando como referência espécies marinhas. As imagens foram geradas através de inteligência artificial, incluindo o Leonardo.AI, BlueWillow e lexica.ai. Algumas imagens eu mesmo criei, enquanto outras encontrei na galeria das próprias plataformas de inteligência artificial. Depois, formatei essas imagens no formato correto no Canvas e as incorporei ao projeto.

O protótipo foi totalmente criado por mim. Utilizei como base jogos online disponíveis na internet, pesquisando vários para entender como o layout funcionava. Quanto à paleta de cores, baseei minhas decisões nas imagens. No final, optei por usar as cores marrom, laranja e azul claro.

### HTML

A parte mais rápida do projeto foi desenvolver o HTML. Como eu já havia dividido bem os frames no Figma, eu já sabia o que fazer.

### CSS

Eu utilizei apenas um arquivo CSS para o projeto inteiro. O principal problema com o CSS foi a responsividade (já explico logo abaixo o porquê).

### JavaScript

#### O JavaScript foi desenvolvido em partes:

1. Direcionamento para as telas de acordo com o botão escolhido pelo jogador (1 jogador) ou (2 jogadores).

2. Interações do botão na segunda tela (a tela de escolher o animal).

3. A aplicação da mensagem de vencedor, verificação de quem ganhou e mudança de turno do jogador foram feitas por último.

Observação: Inicialmente, eu havia criado um arquivo .js para cada tela, ou seja, 5 arquivos JavaScript para cada documento HTML. No entanto, após tudo começar a funcionar, reduzi e otimizei para apenas três arquivo. Mas não foi assim inicialmente.

## O PRINCIPAL PROBLEMA


Um grande erro deste projeto foi na fase de prototipagem. Como era a minha primeira vez criando um projeto no Figma, não lembrei de priorizar a experiência móvel. Comecei criando a tela para desktop, mas depois percebi a necessidade de adaptar as imagens, o layout e proporcionar uma boa experiência para o usuário no mobile. Isso envolveu garantir que os botões fossem grandes o suficiente para toques precisos e tornar todo o design responsivo.

Porém, tive muita dificuldade em adaptar todo o conteúdo para telas pequenas. Eu tentei, mas não ficou bom. Ficou péssimo. Como resultado, **o projeto acabou com uma responsividade ruim**. No entanto, achei que ainda era funcional, especialmente para desktop, então decidi incluí-lo no meu portfólio. **Eu não repeti esse erro no meu próximo projeto**, onde comecei tudo pelo mobile, desde a prototipagem até o desenvolvimento.
