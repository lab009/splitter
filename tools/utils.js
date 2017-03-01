/* @flow */

import { execSync } from 'child_process'
import appRootDir from 'app-root-dir'

export function exec(command : string) {
  execSync(command, { stdio: 'inherit', cwd: appRootDir.get() })
}
