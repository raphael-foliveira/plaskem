import { Flex, Heading, Text } from "@chakra-ui/react";
import ProdutoCard from "./ProdutoCard";

export default function () {
    return (
        <>
            <Heading marginBottom={"2em"}>Nossos produtos</Heading>
            <Flex justifyContent={"space-between"} wrap="wrap" gap={1}>
                <ProdutoCard title="Saco Valvulado">
                    Fabricado em polietileno natural ou pigmentado em diversas cores, o saco
                    valvulado pode ser liso ou impresso. É uma embalagem que possui sistema de
                    fechamento prático e eficiente, já que a válvula se fecha automaticamente por
                    meio da compressão do produto ensacado
                </ProdutoCard>
                <ProdutoCard title="Saco Comum">
                    Produzidas em polietileno de alta ou baixa densidade, as sacolas comuns são
                    práticas, resistentes e possuem ampla variedade. Alguns dos formatos são: sacola
                    camisa, sacola boca de palhaço, sacola vazada e alça flex. Também podem ser
                    produzidos com matéria prima reciclada, ótima opção sustentável, além de reduzir
                    o custo da embalagem.
                </ProdutoCard>
                <ProdutoCard title="Sacola Solda L">
                    Embalagens de uso industrial. São produzidos em polietileno de baixa densidade,
                    mas também podem ser produzidos com matéria prima reciclada, ótima opção
                    sustentável, além de reduzir o custo da embalagem.
                </ProdutoCard>
                <ProdutoCard title="Saco Hamper">
                    O saco hamper é um produto de uso único, ideal para o acondicionamento de
                    produtos infectantes. São embalagens descartáveis, que possuem um cordão para
                    facilitar o fechamento. Também podem ser produzidos com matéria prima reciclada,
                    ótima opção sustentável, além de reduzir o custo da embalagem.
                </ProdutoCard>
                <ProdutoCard title="Saco com Hot Melt">
                    O saco hot melt tem como diferencial o seu sistema de fechamento, característica
                    que concede maior proteção à mercadoria armazenada ou transportada, já que, para
                    acessar o conteúdo, é necessária a violação da embalagem. Também podem ser
                    produzidos com matéria prima reciclada, ótima opção sustentável, além de reduzir
                    o custo da embalagem.
                </ProdutoCard>
                <ProdutoCard title="Bobina Técnica">
                    As bobinas técnicas possuem a função para empacotamento automático ou para
                    rotulação, de cerais, polpa de fruta, produtos higiênicos e industriais. Também
                    podem ser produzidos com matéria prima reciclada, ótima opção sustentável, além
                    de reduzir o custo da embalagem.
                </ProdutoCard>
                <ProdutoCard title="Saco para Lixo em Rolo">
                    Sacos utilizado para descarte de resíduos comuns, utilizados cotidianamente.
                    Também podem ser produzidos com matéria prima reciclada, ótima opção
                    sustentável, além de reduzir o custo da embalagem.
                </ProdutoCard>
                <ProdutoCard title="Embalagens Laminadas">
                    As embalagens laminadas fornecem maior proteção ao produto e ampliam sua
                    conservação, além de proteger a impressão da embalagem, por conta do contato com
                    o próprio produto embalado contra atritos externos, ocasionados pelo transporte
                    ou carregamento da mercadoria. Também podem ser produzidos com matéria prima
                    reciclada, ótima opção sustentável, além de reduzir o custo da embalagem.
                </ProdutoCard>
            </Flex>
        </>
    );
}
