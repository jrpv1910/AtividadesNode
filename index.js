import chalk from "chalk";
import fs from 'fs';

  function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    //const linkExtraidos = texto.match(regex);
    const arrayResultado = [];
    
    let temp;
    while ((temp = regex.exec(texto)) != null){
      arrayResultado.push({ [temp[1]] : [temp[2]]})
     }
      return(arrayResultado);
    }

  function trataErro(erro){ //Função para erro
    throw new Error(chalk.red(erro.code,"Não há arquivo no caminho..."));
  }

  async function pegaArquivo(caminhoDoArquivo){
    const encoding = "utf-8";

    try{ //sucesso
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
      console.log(extraiLinks(texto)) 
    } catch(erro){ //insucesso(erro)
          trataErro(erro);
    }
  }
 pegaArquivo("./Arquivos/texto.md");
 