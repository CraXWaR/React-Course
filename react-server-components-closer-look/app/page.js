import RSC from "@/components/RSC";
import Client from "@/components/Client";
import DataFetching from "@/components/DataFetching";
import ServerActions from "@/components/ServerActions";
import UsePromise from "@/components/UsePromises";
import {Suspense} from "react";
import ErrorBoundary from "@/components/ErorBoundary";

import fs from "fs";


export default async function Home() {
    const data = fs.readFileSync("dummy-db.json", "utf-8");
    const instructors = JSON.parse(data);

    return (<main>
        <ErrorBoundary>
            <Suspense fallback={<p>Loading...</p>}>
                <UsePromise users={instructors}/>
                <ServerActions/>
                <Client>
                    <RSC/>
                </Client>
                <DataFetching/>
            </Suspense>
        </ErrorBoundary>
    </main>);
}
