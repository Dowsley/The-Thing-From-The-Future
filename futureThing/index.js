// Em um cenário *
var green = [
    'PÓS-APOCALÍPTICO',
    'DISTÓPICO',
    'DE FANTASIA',
    'UTÓPICO',
    'CIRCENSE',
    'ARTIFICIAL',
    'AÉREO',
    'ROTULADOR',
    'INCONSISTENTE',
    'ÁRIDO',
    'MARÍTIMO',
    'MISÂNDRICO',
    'MISÓGENO',
    'ILEGAL',
    'PÓS-TRAUMÁTICO',
    'ACADEMICO',
    'MORTO',
    'IDEAL',
    'RURAL',
    'URBANO',
    'TECNOLÓGICO',
    'SUJO',
    'LIMPO',
    'ORIENTAL',
    'ESCASSO',
    'BUROCRÁTICO',
    'ARCAICO',
    'PRIMITIVO',
    'FÉRTIL',
    'INFÉRTIL',
    'BÉLICO',
    'DESUMANO',
    'ESQUECIDO',
    'ATEMPORAL',
    'MULTIÉTICO',
    'NEGRO',
    'EXTRATERRENO',
    'BONDOSO',
    'CAÓTICO',
    'PACÍFICO',
    'ILUSÓRIO',
    'GELADO',
    'QUENTE',
    'TROPICAL',
    'SEGURO',
    'RICO',
    'LGBT',
    'ENIGMÁTICO',
];

// há um(a) *
var red = [
    'FESTIVAL',
    'CRISE',
    'ATAQUE',
    'MILAGRE',
    'CONCERTO',
    'DESGRAÇA',
    'PRAGA',
    'EXPERIMENTO',
    'CRIAÇÃO',
    'MODA',
    'MUDANÇA',
    'RECOMEÇO',
    'PRISÃO',
    'ALIMENTO',
    'SOLUÇÃO',
    'CONTRACULTURA',
    'CULTURA',
    'DISPOSITIVO',
    'SINAL',
    'MENSAGEM',
    'RITUAL',
    'CERIMÔNIA',
    'ENCONTRO',
    'CEITA',
    'CRIATURA',
    'CRIADOR',
    'SER',
    'JOGO',
    'TRABALHO',
    'MISTÉRIO',
    'RUMOR',
    'NOTÍCIA',
    'LEI',
    'REGRA',
    'GUERRA',
    'BATALHA',
    'DEUS'
];

// relacionado(a) a *. O que é?
var blue = [
    'MULHERES',
    'HOMENS',
    'ANIMAIS',
    'BEM-ESTAR',
    'SAÚDE',
    'MÚSICA',
    'FOLCLORE',
    'DROGAS',
    'SECAS',
    'LIVROS',
    'SEXO',
    'PROSTITUIÇÃO',
    'SONO',
    'TRANSGÊNICOS',
    'CLIMA',
    'MEDO',
    'AMOR',
    'TRISTEZA',
    'ÓDIO',
    'VINGANÇA',
    'ESPERANÇA',
    'PRESTÍGIO',
    'CHOCOLATE',
    'VÍCIO',
    'VIDA APÓS A MORTE',
    'REDENÇÃO',
    'DINHEIRO',
    'CONHECIMENTO',
    'IGNORÂNCIA',
    'NATUREZA',
    'FAMÍLIA',
    'PERFEIÇÃO',
    'PIRATARIA',
    'CRIME',
    'ASSASSINATO',
    'DESAPARECIMENTO',
    'ENVELHECIMENTO',
    'ASTRONOMIA',
    'ASTROLOGIA',
    'MISTICIDADE',
    'CIÊNCIA',
    'LOUCURA',
    'RELIGIÃO',
    'IMORTALIDADE',
    'CRIANÇAS',
    'BEBÊS',
    'IDOSOS',
    'CORPO',
    'MENTE',
    'DOGMA',
    'VISÃO',
    'AUDIÇÃO',
    'TATO',
    'OLFATO',
    'PALADAR',
    'ADOLESCENTES',
    'REDES SOCIAIS',
    'COMUNICAÇÃO',
    'MEMÓRIA',
    'DIVINDADE',
    'MENTIRA',
    'ILUSÃO',
];

// * vence.
var condition = [
    'A IDEIA MENOS CRIATIVA',
    'A IDEIA MAIS CRIATIVA',
    'A IDEIA QUE MINHA VÓ NÃO ENTENDERIA',
    'A IDEIA MAIS BIZARRA',
    'A IDEIA MAIS TRISTE',
    'A IDEIA MAIS FELIZ',
    'A IDEIA MAIS INESPERADA',
    'A IDEIA MAIS CLICHÊ',
    'A IDEIA MAIS DESEJÁVEL',
    'A IDEIA MAIS INDESEJÁVEL',
    'A IDEIA QUE FARIA EU FICAR LOUCO',
    'A IDEIA MAIS REPUGNANTE',
    'UMA IDEIA QUE MATARIA ALGUÉM',
    'UMA IDEIA QUE SALVARIA ALGUÉM',
    'UMA IDEIA POR ALGUÉM',
    'UMA POSSIBILIDADE DO AMANHÃ',
    'UM ESPELHO DA REALIDADE',
    'UMA IDEIA DURA DE ACEITAR',
    'UMA IDEIA IDIOTA E VIAJADA',
];

function thingGenerator(green,red,blue,condition)
{
    var thing = 'Em um cenário ' + green[Math.floor(Math.random() * green.length)];
    thing += ' há um(a) ' + red[Math.floor(Math.random() * red.length)];
    thing += ' relacionado(a) a ' + blue[Math.floor(Math.random() * blue.length)] + '.';
    thing += '\n' + condition[Math.floor(Math.random() * condition.length)] + ' vence.';

    return thing;
}

var thing = thingGenerator(green,red,blue,condition);
var containerElement = document.getElementById('me');
var thingElement = document.createTextNode(thing);
containerElement.appendChild(thingElement); 