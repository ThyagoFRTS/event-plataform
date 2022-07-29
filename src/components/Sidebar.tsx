import { gql, useQuery } from "@apollo/client"
import Lesson from "./Lesson"

const GET_LESSONS_QUERY = gql`
    query MyQuery {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            slug
            availableAt
            title
        }
    }
`

interface Lesson {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class"
}

interface GetLessonsQueryResponse {
    lessons: Array<Lesson>;
}

const Sidebar = () => {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
    console.log(data)
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de Aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(item => {
                    return (
                        <Lesson
                            key={item.id}
                            title={item.title}
                            slug={item.slug}
                            availableAt={new Date(item.availableAt)}
                            type={item.lessonType} />
                    )
                })}
            </div>
        </aside>
    )
}

export default Sidebar