export default function ProjectsPage() {
    const projects = [
        {
            title: 'TiramAi – AI App Generator',
            description: 'Built automation workflows to generate Flutter mobile apps from user voice or text inputs, reducing build time from 1 month to under 1 hour.',
        },
        {
            title: 'Hugging Face AI App',
            description: 'Developed an AI summarization tool using Hugging Face Transformers for fast text summarization.',
        },
        {
            title: 'IoT Smart Air Purifier App',
            description: 'Built a Bluetooth-enabled Flutter app to control smart air purifiers, enhancing product engagement.',
        },
        {
            title: 'The Eternal Journey - Comic Project',
            description: 'Created an AI-generated mythological comic series blending storytelling with AI art generation.',
        },
    ];

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-6 hover:shadow-lg transition"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}