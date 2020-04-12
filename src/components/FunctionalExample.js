import React from 'react'
//Props
//Parent componentten childa data geçmek için kullanılır.
//immutable(değişmezdir).Hiçbir zaman child component
//içinde değiştiremeyiz.


function FunctionalComponent(props) {
    console.log(props);
    const { title, person, hobbies, componentExample } = props;
    return (
        <div>
            <h1>{title}</h1>This is Functional Componentyour name is {person.name}

            <div>
                <ul>
                    {
                        hobbies.map((hobby, index) => {
                            return <li>{hobby}</li>
                        })
                    }
                </ul>
                {componentExample}
            </div>
        </div>
    )
}

export default FunctionalComponent
