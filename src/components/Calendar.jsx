export default function Calendar() {
    const calendar = [
        {day: "Lunes", schedule: [{name: "Clase de boxeo", hours: "8:00 - 10:00"}, {name: "Fitness", hours: "12:00 - 14:00"}, {name: "Clase de yoga", hours: "16:00 - 17:00"}, {name: "Flexibilidad", hours: "20:00 - 22:00"}]},
        {day: "Martes", schedule: [{name: "Clase de boxeo", hours: "8:00 - 10:00"}, {name: "Fitness", hours: "12:00 - 14:00"}, {name: "Clase de yoga", hours: "16:00 - 17:00"}, {name: "Flexibilidad", hours: "20:00 - 22:00"}]},
        {day: "Miércoles", schedule: [{name: "Clase de boxeo", hours: "8:00 - 10:00"}, {name: "Fitness", hours: "12:00 - 14:00"}, {name: "Clase de yoga", hours: "16:00 - 17:00"}, {name: "Flexibilidad", hours: "20:00 - 22:00"}]},
        {day: "Jueves", schedule: [{name: "Clase de boxeo", hours: "8:00 - 10:00"}, {name: "Fitness", hours: "12:00 - 14:00"}, {name: "Clase de yoga", hours: "16:00 - 17:00"}, {name: "Flexibilidad", hours: "20:00 - 22:00"}]},
        {day: "Viernes", schedule: [{name: "Clase de boxeo", hours: "8:00 - 10:00"}, {name: "Fitness", hours: "12:00 - 14:00"}, {name: "Clase de yoga", hours: "16:00 - 17:00"}, {name: "Flexibilidad", hours: "20:00 - 22:00"}]},
        {day: "Sabado", schedule: [{name: "Clase de boxeo", hours: "8:00 - 10:00"}, {name: "Fitness", hours: "12:00 - 14:00"}, {name: "Clase de yoga", hours: "16:00 - 17:00"}, {name: "Flexibilidad", hours: "20:00 - 22:00"}]}
    ]

    return (
        <div className="calendar-container">
            <div className="section">
                <div className="scroll" name="calendar"></div>
                <div className="calendar">
                    <h2 className="calendar__title">Enterate sobre nuestras <span className="calendar__title--color">actividades</span></h2>
                    <ul className="days">
                        {calendar.map((day, id) => {
                            return (
                                <li className="days__item" key={id}>
                                    <h5 className="days__title">{day.day}</h5>
                                    <ul className="activities">
                                        {day.schedule.map((scheduleActivities, id) => {
                                            return (
                                                <li className="activity__item" key={id}>
                                                    <span className="activity__name">{scheduleActivities.name}</span>
                                                    <span className="activity__hours">{scheduleActivities.hours}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
