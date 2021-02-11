import React, { Component } from 'react';
import { Icon, Card, Select, TextInput, Textarea, DatePicker } from 'react-materialize';
import axios from 'axios';
class createNote extends Component {
    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date(),
        editing: false,
        _id: ''
    }
    async componentDidMount(){
       const res = await axios.get('http://localhost:4000/api/users');
       this.setState({users: res.data})

       if (this.props.match.params.id) {
        const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id);
        this.setState({
            title: res.data.title,
            content: res.data.content,
            date: new Date(res.data.date),
            userSelected: res.data.author,
            _id: res.data._id,
            editing: true
        });
    }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedNote = {
                title: this.state.title,
                content: this.state.content,
                author: this.state.userSelected,
                date: this.state.date
            };
            await axios.put('http://localhost:4000/api/notes/' + this.state._id, updatedNote);
        } else {
            const newNote = {
                title: this.state.title,
                content: this.state.content,
                author: this.state.userSelected,
                date: this.state.date
            };
            axios.post('http://localhost:4000/api/notes', newNote);
        }
        window.location.href = '/';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeDate = date => {
        this.setState({ date });
    }
    render(){
    return(
        <div className="col l6 offset-l2 center-align">
                    <Card
                    className="blue-grey darken-1"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                    title="Create Note"
                    >
                        <Select
                            id="Select-9"
                            name='userSelected'
                            multiple={false}
                            onChange={this.onInputChange}
                            options={{
                                classes: '',
                                dropdownOptions: {
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                                }
                            }}
                            value={this.state.userSelected}
                            >
                            <option disabled value="">
                                Choose your option
                            </option>

                            {this.state.users.map(user => (
                                    <option key={user._id} value={user.username}>{user.username}</option>
                                ))}
                            </Select>



                      <form onSubmit={this.onSubmit}>
                        <TextInput id="TextInput-4" name='title' label="Titulo" value={this.state.title} required onChange={this.onInputChange}/>

                            <Textarea
                                id="Textarea-12"
                                name='content'
                                data-length={75}
                                label="Comentario..."
                                l={12}
                                m={12}
                                s={12}
                                xl={12}
                                required
                                value={this.state.content}
                                onChange={this.onInputChange}
                            />
                        <DatePicker
                            label='ingrese la fecha'
                            id="DatePicker-5"
                            options={{
                                autoClose: false,
                                container: null,
                                defaultDate: null,
                                disableDayFn: null,
                                disableWeekends: false,
                                events: [],
                                firstDay: 0,
                                format: 'mmm dd, yyyy',
                                i18n: {
                                cancel: 'Cancel',
                                clear: 'Clear',
                                done: 'Ok',
                                months: [
                                    'January',
                                    'February',
                                    'March',
                                    'April',
                                    'May',
                                    'June',
                                    'July',
                                    'August',
                                    'September',
                                    'October',
                                    'November',
                                    'December'
                                ],
                                monthsShort: [
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                    'Aug',
                                    'Sep',
                                    'Oct',
                                    'Nov',
                                    'Dec'
                                ],
                                nextMonth: '›',
                                previousMonth: '‹',
                                weekdays: [
                                    'Sunday',
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                    'Thursday',
                                    'Friday',
                                    'Saturday'
                                ],
                                weekdaysAbbrev: [
                                    'S',
                                    'M',
                                    'T',
                                    'W',
                                    'T',
                                    'F',
                                    'S'
                                ],
                                weekdaysShort: [
                                    'Sun',
                                    'Mon',
                                    'Tue',
                                    'Wed',
                                    'Thu',
                                    'Fri',
                                    'Sat'
                                ]
                                },
                                isRTL: false,
                                maxDate: null,
                                minDate: null,
                                onClose: null,
                                onDraw: null,
                                onOpen: null,
                                onSelect: null,
                                parse: null,
                                setDefaultDate: false,
                                showClearBtn: false,
                                showDaysInNextAndPreviousMonths: false,
                                showMonthAfterYear: false,
                                yearRange: 10
                            }}
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        <button type='submit' className='btn waves-effect waves-light'>
                            Save
                        </button>
                      </form>
                    </Card>
        </div>
    )
}
}

export default createNote;