/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import { Container } from 'inversify';
import { bindLogger } from '@theia/core/lib/node/logger-backend-module';
import { backendApplicationModule } from '@theia/core/lib/node/backend-application-module';
import processBackendModule from '@theia/process/lib/node/process-backend-module';
import terminalBackendModule from '@theia/terminal/lib/node/terminal-backend-module';
import taskBackendModule from '../task-backend-module';
import filesystemBackendModule from '@theia/filesystem/lib/node/filesystem-backend-module';
import workspaceServer from '@theia/workspace/lib/node/workspace-backend-module';
import { messagingBackendModule } from '@theia/core/lib/node/messaging/messaging-backend-module';

export function createTaskTestContainer(): Container {
    const testContainer = new Container();

    testContainer.load(backendApplicationModule);
    bindLogger(testContainer.bind.bind(testContainer));
    testContainer.load(messagingBackendModule);
    testContainer.load(processBackendModule);
    testContainer.load(taskBackendModule);
    testContainer.load(filesystemBackendModule);
    testContainer.load(workspaceServer);
    testContainer.load(terminalBackendModule);

    return testContainer;
}
