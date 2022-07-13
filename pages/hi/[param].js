import Testlinks from "../../components/testlinks"

export default function handler({ param, serverTime }) {
  return <div>
    <h2>Hello { param }! It&#39;s { serverTime } on the server! </h2>
    <Testlinks />
  </div>
}


export const getServerSideProps = async (context) => {
  let param = context.query.param

  return {
    props: {
      param: param,
      serverTime: (new Date()).toISOString()
    }
  }
}