interface Lawyer {
    _id: string;
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    rating: string;
    image: File;
    experience: string;
    languages: string[];
    specializations: string[];
    description: string;
  }

// interface Lawyer{
//     _id: string;
//     name: string;
//     rating: string;
//     src: string;
//     location: string;
//     experience: string;
//     languages: string[];
//     categories: string[];
// }
  
  export default Lawyer;