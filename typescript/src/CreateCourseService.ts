
/*class CreateCourseService {
    execute(name: string, duration: number, educator: string) {
        console.log(name, duration, educator)
    }
}

Quando fazemos desta maneira sempre iremos ter que respeitar a ordem da solicitação name, duration e 
educatior, por isso a melhor maneira seria criar uma interface.
*/

interface Course {
    name: string;
    duration?: number;
    educator: string;
};

class CreateCourseService {
    /*execute(data:Course){
        console.log(data.name, data.duration, data.educator)
                           OU
    }*/

    execute({duration, name, educator}: Course){
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService();