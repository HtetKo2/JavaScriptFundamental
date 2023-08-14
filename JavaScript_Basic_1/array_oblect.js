 //-------sever
        //-------array_oblect

        let persons =[
            {name:"aung aung",age:20},
            {name:"kyaw kyaw",age:23},
            {name: "susu",age:30},
        ]
        // console.log(persons);
        // console.log(persons[0].name);

        // for (let i = 0; i< persons.length; i++) {
        //      console.log(persons[i].name);            
        // }


        //**********for each----------no return value
        persons.forEach((aa) => {  
            console.log(aa.name)
            console.log(aa)
        });

        //*********map ---------------return value
        persons.map((bb)=>{
            console.log(bb.name);
        })
        // easy way
        persons.map(bb=>console.log(bb.age))
        
        let testing=persons.map(bb=>bb.name)
        console.log(testing)
        

        // note 
        // foreach ()=>{}

        let numbers = [1,2,3,4];

        let abc =numbers.forEach((nums)=>{
            //console.log(nums);
            return nums;                        // undefined
        });

        console.log(abc);

        let efg=numbers.map((ee)=>{
            return ee;
        })


        console.log(efg);