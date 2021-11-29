import ClienteModel from '../../model/cliente';

const clientes: ClienteModel[] = [
  new ClienteModel(1, 'Baggio', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954983/site/MIX_500x500_askc2e.png',
    alt: 'Supermercado Baggio',
  }),
  new ClienteModel(2, 'Wagner', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/logotipo_hiper_Wagner_500x500_fb_m4rxzz.png',
    alt: 'Supermercado Wagner',
  }),
  new ClienteModel(3, 'Marin', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1638186078/site/logo_MARIN_500x500_fb_uqyauv.png',
    alt: 'Supermercado Marin',
  }),
  new ClienteModel(4, 'Bertuol', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/logotipo_bertuol_500x500_fb_bai55p.png',
    alt: 'Supermercado Bertuol',
  }),
  new ClienteModel(5, 'Sucesso', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954983/site/Sucesso_das_Carnes_500x500_l9wyj2.png',
    alt: 'Supermercado Sucesso',
  }),
  new ClienteModel(6, 'Janh', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/Logo_jahn_x5ibxa.png',
    alt: 'Supermercado Jahn',
  }),
  new ClienteModel(7, 'Trez', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/LOGOMARCA_trez_500x500_glhbmm.png',
    alt: 'Supermercado Trez',
  }),
  new ClienteModel(8, 'Maccari', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/maccari_500x500_xchdkf.png',
    alt: 'Supermercado Maccari',
  }),
  new ClienteModel(9, 'Milenium', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/milenium_hh1kj1.png',
    alt: 'Supermercado Milenium',
  }),
  new ClienteModel(10, 'Central', {
    src: 'https://res.cloudinary.com/somasys2021/image/upload/v1637954982/site/logo_central_nova_xxqnry.png',
    alt: 'Supermercado Central',
  }),
];

export default clientes;
