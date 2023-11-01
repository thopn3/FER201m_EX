function Student({class:c, data:d}) { // Props = {class, data}
    return (
        <div>
            <h2>List of Students - {c}</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Age</th><th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        d.map(s => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name.first}</td>
                                <td>{s.age}</td>
                                <td>{s.country.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Student;