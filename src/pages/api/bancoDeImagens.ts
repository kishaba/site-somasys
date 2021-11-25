import ClienteModel from "../../model/cliente";

const clientes: ClienteModel[] = [    
    new ClienteModel(1, 'Baggio', {
        src: 'https://res.cloudinary.com/somasys2021/image/upload/c_limit,h_500,w_500/v1637842943/site/MIX_cgiw69.png',
        alt: 'Supermercado Baggio'
    }),
    new ClienteModel(2, 'Wagner', {
        src: 'https://res.cloudinary.com/somasys2021/image/upload/c_limit,h_500,w_500/v1637842943/site/logotipo_hiper_Wagner_jcpcau.png',
        alt: 'Supermercado Wagner'
    }),
    new ClienteModel(3, 'Marin', {
        src: 'https://res.cloudinary.com/somasys2021/image/upload/c_limit,h_500,w_500/v1637861237/site/marin_iazdqv.png',
        alt: 'Supermercado Marin'
    }),
    new ClienteModel(4, 'Bertuol', {
        src: 'https://res.cloudinary.com/somasys2021/image/upload/c_limit,h_500,w_500/v1637842940/site/logotipo_bertuol_2_ozmr6m.png',
        alt: 'Supermercado Bertuol'
    }),
    new ClienteModel(5, 'Sucesso', {
        src: 'https://res.cloudinary.com/somasys2021/image/upload/c_limit,h_500,w_500/v1637842941/site/Sucesso_das_Carnes_nhkvdi.jpg',
        alt: 'Supermercado Sucesso'
    }),
    new ClienteModel(6, 'Janh', {
        src: 'https://res.cloudinary.com/somasys2021/image/upload/c_limit,h_500,w_500/v1637845111/site/jahn_oqocxu.jpg',
        alt: 'Supermercado Jahn'
    }),
    new ClienteModel(7, 'Trez', {
        src: 'https://res.cloudinary.com/somasys2021/image/upload/c_limit,h_500,w_500/v1637842940/site/LOGOMARCA_trez_rltwpm.jpg',
        alt: 'Supermercado Trez'
    }),
    new ClienteModel(8, 'Maccari', {
        src: 'https://res.cloudinary.com/somasys2021/image/upload/c_limit,h_500,w_500/v1637845111/site/maccari_zjzmhs.jpg',
        alt: 'Supermercado Maccari'
    }),
    new ClienteModel(9, 'Milenium', {
        src: 'https://res.cloudinary.com/somasys2021/image/upload/c_limit,h_500,w_500/v1637845111/site/milenium_hnmn1m.png',
        alt: 'Supermercado Milenium'
    }),
    new ClienteModel(10, 'Central', {
        src: 'https://res.cloudinary.com/somasys2021/image/upload/c_limit,h_500,w_500/v1637842940/site/logo_central_nova_p6jtcl.jpg',
        alt: 'Supermercado Central'
    })
]

export default clientes