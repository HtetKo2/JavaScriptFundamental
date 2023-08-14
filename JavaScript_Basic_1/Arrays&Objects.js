
        //------array & object

        let mix = ["bob",3.14,true];
        

        let name = mix[0];
        let num = mix[1];
        let out = mix[3];

        mix[0] ="alice"
        mix[4]= 5

        console.log(mix);

        console.log(mix[1]);


        let fruit = ["apple","orange","mango","banana",3.14]
        fruit[5]=true
        
        console.log(fruit);
        console.log(fruit.length);

        let all =[[123,456,789],['ant','cat','dog']];


        console.log(all);
        console.log(all[0]);
        console.log(all[0][1]);


        //-------push,unshift,pop,shift

        let animals =["dog","cat","ant"]

        animals.push("cow");
        animals.unshift("bird");

        console.log(animals);

        animals.pop();
        console.log(animals);
        animals.shift();
        console.log(animals);

        //-------indexOf

        let fruits = ["apple","orange","mango","banana","strawberry"]
        console.log(fruits);
        fruits.indexOf("orange");
        console.log(fruits.indexOf("mango"));

        //-------splice

        fruits.splice(1,1);
        console.log(fruits);



        //-------join
        let result_j = fruits.join(",")
        console.log(result_j);


        //-------map => two methods

        let nums = [1,2,3,4,5]

        let result_m = nums.map(function (n) {
            return n + 1;
            
        })

        console.log(result_m);


        let result_m_1 = nums.map(n=>n+1);
        console.log(result_m_1);


        //-------filter two methods

        let result_f = nums.filter(function(n){
            return n % 2
        });

        console.log(result_f);

        let result_f_1 = nums.filter(n=>n%2);
        console.log(result_f_1);


        //-------!filter two methods

        let result_f_2= nums.filter(function(n){
            return !(n % 2)
        });

        console.log(result_f_2);

        let result_f_3 = nums.filter(n=>!(n%2));
        console.log(result_f_3);


        let result_plus = nums.map(n=>n+2).filter(n=>n%2);

        console.log(result_plus);

        //-------reduce two methods

        let result_reduce = nums.reduce (function(a,n){
            return a+n
        });

        console.log(result_reduce);

        let result_reduce_1 = nums.reduce((a,n)=>(a+n));
         console.log(result_reduce_1);


         //-------array & destructuring

         let nums_1 = [1,2,3];
         let alpha = ['a','b','c'];
         let result_ad =[nums,alpha];

         console.log(result_ad);

         let result_ad_1 = [ ...nums, ...alpha];
        
         console.log(result_ad_1);

        
         result_ad_1.pop(); //------pop,push,.... can use
         console.log(result_ad_1);


         let four = [...nums_1,4];
         let zero = [0,...four];

         console.log(zero);


        ////*******Careful
         

        let num_f = [123,456]

         function add(a,b) {
            
            return a + b
            
         };


        let abc= add(num_f[0],num_f[1])
        console.log(abc)


        let def= add(...num_f);
        console.log(def)


         //------Two Ways


        let numbers = [333,444];
        let aa = numbers[0];
        let bb = numbers[1];
        function add_1([aa,bb]){
            return aa + bb
        }
        let aabb = add_1(numbers);
        console.log(aabb)


       
        let numbers_1 = [333,444];
        let [aaa,bbb]=numbers_1;
        function add_2([aa,bb]){
            return aa * bb
        }
        let aabbcc = add_2(numbers);
        console.log(aabbcc)


        
