const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso!');
    //reject('Erro!');
  }, 1000);
});

// apiCall
// .then((resposta) => { 
//   console.log(resposta);
// })
// .catch((erro) => { 
//   console.log(erro);
// });

async function run() {
  try {
    const resposta = await apiCall;
    console.log(resposta);
    console.log('Depois da promise');
  } catch (erro) {
    console.log(erro);
  }
}
run();
