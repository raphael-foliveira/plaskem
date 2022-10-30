import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Star } from "../UI/Assets";

function InfoItem({ children }: { children: ReactNode }) {
    return (
        <Flex alignItems="center" padding="2em 0.5em" width={{sm: "100%", lg:"50%"}}>
            <Star />
            <Text marginLeft={10}>{children}</Text>
        </Flex>
    );
}

export default function InfoCard() {
    return (
        <Flex backgroundColor="#f9fafb" marginTop="84px" borderRadius="30px" wrap={"wrap"} width="100%">
            <InfoItem>
                Criamos produtos sob encomenda, atendendo as particularidades de seus clientes no
                tocante a produção de embalagens flexíveis.
            </InfoItem>
            <InfoItem>
                Para garantir um material com rigor de todas as especificações solicidades pelo
                cliente, os produtos durante o processo são testados rigorosamente e aprovados pela
                nossa equipe técnica.
            </InfoItem>
            <InfoItem>
                Nossa visão é ser uma empresa de transformação de resinas plásticas de destaque no
                mercado, pautada em inovação e melhorias contínuas, reconhecida pela capacitação de
                seus colaboradores e a qualidade de seus produtos.
            </InfoItem>
            <InfoItem>
                Nossa missão é proporcionar máxima satisfação aos nossos clientes, contribuindo com
                a saúde, segurança e o meio ambiente.
            </InfoItem>
        </Flex>
    );
}
