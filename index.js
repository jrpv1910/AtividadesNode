import chalk from "chalk";
import fs from "fs";

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultado = [];

    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayResultado.push({[temp[1]] : [temp[2]]});
    }
    return arrayResultado.length === 0 ? "Não há links" : arrayResultado;
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    try{
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return(extraiLinks(texto));
    }
    catch(erro){
        trataErro(erro);
    }
}

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "não há arquivo no caminho"));
}


export default pegaArquivo;
