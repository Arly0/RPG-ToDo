import React from 'react';

class NewTask extends React.Component {

    

    render(){
        return (
            <div>
                <form onSubmit={this.props.setTask}>
                    <label>
                        <p className="">
                            Enter name of task
                        </p>
                        <input type="text" name={"nameTask"} required className="" />
                    </label>
                    <label>
                        <p className="">
                            Enter important of ypur task
                        </p>
                        <input type="number" name={"importantTask"} min="1" max="10" required className="" />
                    </label>
                    <label>
                        <p>
                            Enter task description
                        </p>
                        <textarea name={"task"} required></textarea>
                    </label>
                    <input type="submit" value="Enter task" className="" />
                </form>

                {/* тут будет поля для ввода задачи */}
            </div>
        );
    }

}

export default NewTask;