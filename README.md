<h1>Detalhamento das APIs</h1>

<h2>API Filiais</h2>
<pre>http://localhost:3000/filiais</pre> 
<p><b>GET: </b>O endereço retorna a lista de todas as filiais da empresa.</p> 
<pre>http://localhost:3000/filiais/nova</pre> 
<p><b>POST: </b>A requisição POST cadastra uma nova filial usando como campos do BODY/JSON "nomeDaFilial", "status" e "uf".</p>

<h2>API Tipos de Feriados</h2>
<pre>http://localhost:3000/tiposdeferiados</pre>
<p>GET: O endereço retorna todos os tipos de feriados cadastrados.</p>
<pre>http://localhost:3000/tiposdeferiados/novo</pre>
<p>POST: Essa requisição com os campos do BODY/JSON "tipoDoFeriado" e "status" cadastram um novo tipo.</p>

<h2>API Feriados</h2>
<pre>http://localhost:3000/feriados/todos</pre>
<p>GET: O endereço retorna todos feriados cadastrados na base de dados.</p>

<pre>http://localhost:3000/feriados/novo</pre>
<p>POST: Essa requisição com os campos do BODY/JSON "tipoDoFeriado" e "status" cadastram um novo tipo.</p>

<h1>Sandbox - Roadmap</h1>
<pre>
- Aprender a manipular respostas
- Realizar o desacoplamento dos DTOs
- Tratamento de erros em todas as requisições
- Separar todos os endpoints cada um com um modulo separado
- Terminar o crud de cada um - deletar, alterar
- Vamos brincar de executar os testes
- Verificar como fazer para segurança de acesso
- Verificar todos os campos de log das entidades + usuários

- Essa semana toda vamos focar em desenvolver a API e o back end

</pre>

