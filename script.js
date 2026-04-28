const artigos = [
{
titulo:"Como resetar senha",
categoria:"Acesso",
conteudo:"Para resetar sua senha clique em Esqueci minha senha e siga as instruções."
},

{
titulo:"Sistema não abre",
categoria:"Incidentes",
conteudo:"Verifique conexão, limpe cache e reinicie o navegador"
},

{
titulo:"Erro ao fazer login",
categoria:"Acesso",
conteudo:"Confira usuário e senha e valide permissões"
},

];

function listarAtigos(lista = artigos){
    const area=document.getElementById("listarArtigos");

    area.innerHTML = "";

    lista.forEach(a=> {
        area.innerHTML +=`
        <div class="card">
        <h3>${a.titulo}</h3>

        <p>Categoria: ${a.categoria}</p>

        <button onclick="verArtigo('${a.conteudo}')">
        Ver solição
        </button>
        </div>
        `;
    });
}

function verArtigo(conteudo){
    alert(conteudo);
}

function filtrarArtigos(){
    const termo = document.getElementById("busca")
    .value
    .tolowerCase();

    const filtrados=artigos.filter(a=>
        a.titulo.tolowerCase(termo) ||
        a.categoria.tolowerCase().includes(termo)
    );

    listarAtigos(filtrados);
}

listarAtigos();