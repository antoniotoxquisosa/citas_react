/* 
TODO: Children se utiliza para pasarle varios elementos pero en el elemeto donde se invoka se pone el nombre del componente por ejemplo:
<Error>elementos</Error> 
*/

const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 font-bold uppercase rounded">
      <p>{children}</p>
    </div>
  );
};

export default Error;
