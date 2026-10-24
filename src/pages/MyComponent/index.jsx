import useApi from '../../hooks/useApi';
import useToggle from '../../hooks/useToggle';

function MyComponent() {
    const [isVisible, toggleVisible, setVisible] = useToggle(false);
    const { data, loading, error, refetch } = useApi(
        'https://jsonplaceholder.typicode.com/posts',
    );
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <button onClick={toggleVisible}>
                {isVisible ? 'Hide' : 'Show'} Content
            </button>
            <button onClick={() => setVisible(true)}>Force Show</button>

            {isVisible && (
                <div>
                    <button onClick={refetch}>Refetch data</button>
                    {data?.map((item) => (
                        <div key={item.id}>{item.title}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyComponent;
