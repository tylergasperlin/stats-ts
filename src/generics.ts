
//nothing to do with generics
//one function definition 
const add = (a:number, b: number): number => {
    return a + 1;
}

add(10, 1)
add(10, 2)
add(10, 3)


/////instead of using holdnumber and holdstring we will create a generic
class HoldNumber1{
    data: number = 0
}

class HoldString1{
    data: string = ''
}

const holdNumber = new HoldNumber1()
holdNumber.data = 123

const HoldString = new HoldString1()
HoldString.data = 'asldk'

/////use generics

//typeofdata is a generic argument
//when we 
class HoldAnything<T>{
    data: T | undefined;

    add(a: T): T{
        return a;
    }
}

//number does the same thing that a function argument does
//give me holdanything that works with numbers
//this customizes how the class works
const holdNumber2 = new HoldAnything<number>();
holdNumber2.data = 123;
holdNumber2.add(10)

const holdString2 = new HoldAnything<string>();
holdString2.data= 'wahoo!'