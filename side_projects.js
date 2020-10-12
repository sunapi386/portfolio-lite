'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );
    return (
      <button>Click me</button>
    )
  }
}

// const LikeButton = () => {
//  // const [repos, setRepos] = useState([])

//   // useEffect(() => {
//   //   async function getRepos() {
//   //     const reposRes = await fetch(
//   //       "https://api.github.com/users/albingroen/repos"
//   //     ).then((res) => res.json());
//   //     setRepos(reposRes)
//   //   }

//   //   if (!repos.length) {
//   //     getRepos()
//   //   }
//   // }, [repos])

//   return (
//     <div>
//       <h3>Personal projects</h3>
//     </div>
//   )
// }